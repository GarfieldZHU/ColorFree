import * as React from 'react'

interface Props {
  symbol?: string;   // Unicode string as emoji
  label?: string;
}

/**
 * A wrapper of emoji icon to be inline component.
 * @param props: emoji symbol is must. Araia label is optional
 */
export const Emoji: React.FC<Props> = ({ symbol = '🤣', label } : Props) => {
  return <span
    className="emoji"
    role="img"
    aria-label={label ? label : ""}
    aria-hidden={label ? "false" : "true"}
  >
    {symbol}
  </span>
}