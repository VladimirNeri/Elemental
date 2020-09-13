import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import cx from 'classnames';
import data from '../../data/contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FootStyl } from './footer.style';

class Footer extends Component {
  state = {
    showList: true,
    highlightedText: false,
  };

  switch = () => {
    this.setState((prevState) => ({
      showList: !prevState.showList,
    }));
  };

  listSwitch = () => {
    this.setState((state) => ({
      highlightedText: !state.highlightedText,
    }));
  };

  render() {
    return (
      <FootStyl>
        <div className='footer'>
          <button className='display' onClick={this.switch}>
            {this.state.showList ? 'Close' : 'Footer'}
          </button>

          <CSSTransition
            in={this.state.showList}
            timeout={400}
            classNames='list-transition'
            unmountOnExit
            appear
            onEntered={this.listSwitch}
            onExit={this.listSwitch}
          >
            <div className='list-body'>
              <div className='signup'>Subscribe to the Newsletter</div>
              <div className='icons'>
                <ul>
                  {data.map((s) => (
                    <li key={s.label}>
                      <a href={s.link}>
                        <FontAwesomeIcon icon={s.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div
                className={cx('copyright', {
                  'list-item--active': this.state.highlightedText,
                })}
              >
                © Vladimir Neri, for Demo Purposes Only
              </div>
            </div>
          </CSSTransition>
        </div>
      </FootStyl>
    );
  }
}

export default Footer;
