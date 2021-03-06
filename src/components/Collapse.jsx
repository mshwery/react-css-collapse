import React, { PropTypes, Component } from 'react';
import util from '../util';

class Collapse extends Component {
  componentDidMount() {
    if (this.content && this.props.isOpen) {
      this.setContentStyleProperty('height', 'auto');
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.content) {
      // expand
      if (!this.props.isOpen && nextProps.isOpen) {
        // have the element transition to the height of its inner content
        this.setContentStyleProperty('height', `${this.content.scrollHeight}px`);
      }
      // collapse
      if (this.props.isOpen && !nextProps.isOpen) {
        // explicitly set the element's height to its current pixel height, so we
        // aren't transitioning out of 'auto'
        this.setContentStyleProperty('height', `${this.content.scrollHeight}px`);
        util.requestAnimationFrame(() => {
          // "pausing" the JavaScript execution to let the rendering threads catch up
          // http://stackoverflow.com/questions/779379/why-is-settimeoutfn-0-sometimes-useful
          setTimeout(() => {
            this.setContentStyleProperty('height', '0px');
            this.setContentStyleProperty('overflow', 'hidden');
          }, 0);
        });
      }
    }
  }

  setContentStyleProperty(property, value) {
    this.content.style[property] = value;
  }

  render() {
    return (
      <div
        ref={(el) => { this.content = el; }}
        style={{
          willChange: 'height',
          height: '0px',
          overflow: 'hidden',
        }}
        className={this.props.className}
        onTransitionEnd={(e) => {
          if (this.props.isOpen) {
            this.setContentStyleProperty('height', 'auto');
            this.setContentStyleProperty('overflow', 'visible');
          }
          if (this.props.onRest && e.target === this.content && e.propertyName === 'height') {
            this.props.onRest();
          }
        }}
      >
        {this.props.children && this.props.children}
      </div>
    );
  }
}

Collapse.defaultProps = {
  isOpen: false,
  className: null,
  children: null,
  onRest: null,
};

Collapse.propTypes = {
  children: PropTypes.node,
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  onRest: PropTypes.func,
};

export default Collapse;
