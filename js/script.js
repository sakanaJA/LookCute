class App extends React.Component {
    constructor(props) {
        super(props);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseMove(e) {
      const el = document.getElementById("wrapper");
      const d = el.getBoundingClientRect();
      let x = e.clientX - (d.left + Math.floor(d.width / 2));
      let y = e.clientY - (d.top + Math.floor(d.height / 2));
      // Invert values
      x = x - x * 2;
      y = y - y * 2;
      document.documentElement.style.setProperty("--scale", 1.6);
      document.documentElement.style.setProperty("--x", x / 2 + "px");
      document.documentElement.style.setProperty("--y", y / 2 + "px");
    }
  
    handleMouseLeave() {
      document.documentElement.style.setProperty("--scale", 1);
      document.documentElement.style.setProperty("--x", 0);
      document.documentElement.style.setProperty("--y", 0);
    }

    render() {
      return React.createElement(
        'div',
        {
          id: 'wrapper',
          onMouseMove: this.handleMouseMove,
          onClick: this.handleMouseLeave
        },
        React.createElement('img', { id: 'image' })
      );
    }
}

ReactDOM.render(React.createElement(App, null), document.getElementById("root"));
