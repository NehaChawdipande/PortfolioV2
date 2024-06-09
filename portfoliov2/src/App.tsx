import "./App.scss";
function App() {
  const embed = () => {
    return {
      __html: '<spline-viewer loading-anim-type="spinner-big-light" url="https://prod.spline.design/oQF2wFKmvwQjdZjp/scene.splinecode"></spline-viewer>'
    }
  }
  const embedLargeView = () => {
    return {
      __html: '<spline-viewer loading-anim-type="spinner-big-light" url="https://prod.spline.design/d54UYJ7lfP9yBrNO/scene.splinecode"></spline-viewer>'
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
        <div className="laptopView" dangerouslySetInnerHTML={embedLargeView()} style={{
          width: "99vw",
          height: "99vh"
        }}>
        </div>
        {/* <ComingSoon /> */}

      </div>
    </>
  );
}

export default App;
