import React, { useEffect, useState, useRef } from 'react';
import { Helmet } from "react-helmet";
import StaticDashboardImg from '../../img/staticDashboard.png';
import StaticDashboardMobileImg from '../../img/staticDashboardMobile.png';

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
  const [ vizReady, setVizReady ] = useState(false);

  const vizRef = useRef(null);
  const showMobile = width <= 1050;

  const vizIsReady = async (event) => {
    setVizReady(true);
  }

  useEffect(() => {
    console.log('[App.js] VizRef', vizRef);
    if (vizRef.current) {
      const vizEl = vizRef.current;
      vizEl.addEventListener("firstinteractive", vizIsReady);
    }
  }, [vizRef])

  // *** Load the viz in to the component by setting the viz variable with the tableau-viz component

  const loadViz = () => {

    setViz(
      <tableau-viz 
        ref={vizRef}
        id="tableauViz"       
        src={props.viewUrl}
        device={showMobile ? "phone" : "desktop"}
        hide-tabs={true}
        token={token}
        toolbar='hidden'
        width={'max-w-full'}
        touch-optimize={showMobile}
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
      setTimeout(() => {
        const vizEl = vizRef.current;
        vizEl.addEventListener("firstinteractive", vizIsReady);
      }, 1000)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token])



  // *** Display loading or error state or retriving a token instead of loading dashboard

  // if (loading) return "Loading..."
  if (error) return "Error! " + JSON.stringify(error);
  // *** If the token is present then return the embedding API library with the tableau-viz component

  const padding = showMobile ? 'px-0' : 'px-32 pb-32';

  return (
  <>
    <Helmet> 
      <script type="module" src="https://embedding.tableauusercontent.com/tableau.embedding.3.1.0.min.js" async></script>
    </Helmet>
    <div className={!vizReady ? 'mx-0 h-0' : 'mx-0'}>
      {viz}
    </div>
    <div className={vizReady ? 'hidden ' + padding : 'mx-0 ' + padding}>
      <img src={showMobile? StaticDashboardMobileImg : StaticDashboardImg} alt="Static Dashboard" />
    </div>
  </>
)};

export default TableauEmbed;
