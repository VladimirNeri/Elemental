import styled from 'styled-components';

export const HamStyl = styled.div`
  .hamburger-container {
    display: none;
  }

  @media (max-width: 487px) {
    .hamburger-container {
      display: initial;
    }
  }

  .main {
    height: inherit;
    line-height: inherit;
    text-align: right;

    ul {
      height: inherit;
      line-height: inherit;

      li {
        border-left: solid 1px rgba(160, 160, 160, 0.3);
        height: inherit;
        line-height: inherit;
        white-space: nowrap;

        i {
          text-decoration: none;
          border-bottom: 0;
          overflow: hidden;
          position: relative;
          text-indent: 4em;
          margin-right: 1.5em;
        }

        * {
          display: block;
          float: left;
        }

        a {
          @include icon;
          border-bottom: 0;
          color: #aaaaaa;
          overflow: hidden;
          position: relative;
          text-indent: 4em;
          width: 4em;

          &:before {
            display: block;
            height: inherit;
            left: 0;
            line-height: inherit;
            position: absolute;
            text-align: center;
            text-indent: 0;
            top: 0;
            width: inherit;
          }
        }
      }
    }
  }

/* Position and sizing of burger button */
.bm-burger-button {
		display: none;
	}

	/* Color/shape of burger icon bars */
	.bm-burger-bars {
		display: none;
	}

	/* Position and sizing of clickable cross button */
	.bm-cross-button {
		display: none;
	}

	/* Color/shape of close button cross */
	.bm-cross {
		display: none;
	}

	/* General sidebar styles */
	.bm-menu {
	  background: white;
	  padding: 2em 1em 0;
	  font-size: 1.15em;
	}

	/* Wrapper for item list */
	.bm-item-list {
	  color: #3c3b3b;
	  padding: 0.8em;
		font-family: "Raleway", Helvetica, sans-serif;
	}

	.index-link {
		z-index: 3;
	}

  .main .menu {
		cursor: pointer;
	}

  .main .close-menu {
		border: 0;
		z-index: 10000;
	}

  .main .open-menu {
		border: 0;
	}

.open-menu{
	position: fixed;
	right: 0;
	border: none;
}

.close-menu{
	position: fixed;
	right: 0;
	z-index: 3;
	border-left: 0;
}
  .bm-item-list {
    margin-top: 0;
  }

  .menu-hover {
    margin-right: 1em;
  }

  .menu-hover:hover {
    opacity: 0.5;
  }

  .hamburger-ul {
    display: block;

    li a h3 {
      border: 0;
      border-top: dotted 1px rgba(160, 160, 160, 0.3);
      margin: 1.5em 0 0 0;
      padding: 1.5em 0 0 0;
    }

    li a:hover {
      color: dodgerblue;
    }

    li {
      display: block !important;
    }

    h3 {
      font-size: 0.7em;
    }

    .index-li {
      border-top: none;
    }
  }
`;
