function App(props) {
  return (
    <div className={`${props.className}`} style={{ ...props.style }}>
      Component
    </div>
  );
}

export default App;
