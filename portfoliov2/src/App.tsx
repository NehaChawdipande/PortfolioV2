import "./App.scss";
function App() {
  const embed = () => {
    return {
      __html: '<spline-viewer loading-anim-type="spinner-big-light" url="https://prod.spline.design/oQF2wFKmvwQjdZjp/scene.splinecode"></spline-viewer>'
    }
  }
  return (
    <>
      <div className="App">
        <div className="mobileView" dangerouslySetInnerHTML={embed()} style={{
          width: "99vw",
          height: "99vh"
        }}>
        </div>
        <iframe className="laptopView" title="laptopView" src='https://my.spline.design/portfoliolandscapecopy-9c51313ccd2976e0f1764142768a8f5d/' frameBorder='0' width='100vw' height='100vh' style={{
                 width: "99vw",
                 height: "99vh" }} ></iframe>

        {/* <ComingSoon /> */}

      </div>
    </>
  );
}

export default App;
