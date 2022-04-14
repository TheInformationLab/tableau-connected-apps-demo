import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from "react-helmet";

const getWidth = () =>
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

const TableauEmbed = (props) => {
  const [ viz, setViz ] = useState();
  const [ token, setToken ] = useState(null);
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState();
  const [ width, setWidth ] = useState(getWidth());

  const vizRef = useRef(null);

  const loadViz = () => {
    const showMobile = width <= 1050;

    setViz(
      <tableau-viz 
        ref={vizRef}
        id="tableauViz"       
        src={props.viewUrl}
        device={showMobile ? "phone" : "desktop"}
        hide-tabs={false}
        token={token}
        toolbar='hidden'
      />
    );
  };

  useEffect(() => {
      fetch(props.tokenUrl)
      .then(response => {
        if (response.ok) {
          return response.text();
        }
        throw response;
      })
      .then(data => {
        setToken(data);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  useEffect(() => {
    if (token) {
      loadViz();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])

  if (loading) return "Loading..."
  if (error) return "Error! " + JSON.stringify(error);

  return (
  <>
    <Helmet> 
      <script type="module" src="https://public.tableau.com/javascripts/api/tableau.embedding.3.1.0.min.js" async></script>
    </Helmet>
    <div className='mx-0'>
      {viz}
    </div>
  </>
)};

export default TableauEmbed;
