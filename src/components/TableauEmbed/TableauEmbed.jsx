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

  // *** Load the viz in to the component by setting the viz variable with the tableau-viz component

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

  // *** On load fetch the JWT via the api path /api/jwt

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // *** When the TableauEmbed component receives a token or the token changes the loadViz()
  //     function is executed to load the Tableau dashboard

  useEffect(() => {
    if (token) {
      loadViz();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])



  // *** Display loading or error state or retriving a token instead of loading dashboard

  if (loading) return "Loading..."
  if (error) return "Error! " + JSON.stringify(error);



  // *** If the token is present then return the embedding API library with the tableau-viz component

  return (
  <>
    <Helmet> 
      <script type="module" src="https://embedding.tableauusercontent.com/tableau.embedding.3.1.0.min.js" async></script>
    </Helmet>
    <div className='mx-0'>
      {viz}
    </div>
  </>
)};

export default TableauEmbed;
