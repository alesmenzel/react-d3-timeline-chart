import React from "react";
import cx from "classnames";

import Group from "../group/group";

import "./line-start.scss";

const LineStart = ({ scaleX, scaleY, idx, line, isActive, onLabelClick }) => {
  const first = line.values[0];

  if (!first) {
    return null;
  }

  const [minY] = scaleY.domain();

  return (
    <Group
      className={cx("c-tlch-line-start", `c-tlch-line-start--${line.type}`, {
        "c-tlch-line-start--active": isActive
      })}
    >
      <line
        className="c-tlch-line-start__line"
        x1={scaleX(first.x)}
        y1={scaleY(minY)}
        x2={scaleX(first.x)}
        y2={isActive ? scaleY(minY) + 20 : scaleY(minY)}
        strokeWidth={isActive ? 4 : 2}
      />
      <Group
        className="c-tlch-line-start__label"
        x={scaleX(first.x) - 22}
        y={isActive ? scaleY(minY) + 15 : scaleY(minY)}
        onClick={e => onLabelClick(e, idx)}
      >
        <Group>
          <svg width="25" height="30" viewBox="0 0 32 40">
            <path
              className="c-tlch-line-start__label-background"
              d="M30.4 19h.1V0l-15 6C7.2 6 .5 12.7.5 21s6.7 15 15 15 15-6.7 15-15c0-.7-.1-1.3-.1-2z"
            />
          </svg>
        </Group>
        <Group x="7" y="10">
          <svg
            className="c-tlch-line-start__label-icon"
            width="12"
            height="11"
            viewBox="0 0 12 11"
          >
            <path
              d="M5.505 2.782c-1.542 0-2.752 1.223-2.752 2.782 0 1.556 1.21 2.781 2.752 2.781 1.542 0 2.752-1.225 2.752-2.781 0-1.559-1.21-2.782-2.752-2.782m4.405 7.232H1.101A1.11 1.11 0 0 1 0 8.901V2.225a1.11 1.11 0 0 1 1.101-1.111h1.761L3.854 0h3.303l.991 1.114H9.91c.605 0 1.1.5 1.1 1.111v6.676a1.11 1.11 0 0 1-1.1 1.113M5.505 7.343a1.77 1.77 0 0 1-1.761-1.779c0-.984.788-1.782 1.761-1.782.973 0 1.761.798 1.761 1.782a1.77 1.77 0 0 1-1.761 1.779"
              fill="#ffffff"
              fillRule="evenodd"
            />
          </svg>
        </Group>
      </Group>
    </Group>
  );
};

export default React.memo(LineStart);
