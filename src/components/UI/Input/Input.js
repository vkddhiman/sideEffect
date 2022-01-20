import React, { useImperativeHandle, useRef } from "react";
import classes from './Input.module.css'

// ref it is used when ref is set to outside

const Input = React.forwardRef((props, ref) => {

  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  }
  // use to send data to outside component here focus is externally available name for using activate function
  useImperativeHandle(ref,() => {
    return {
      focus : activate
    }
  })

  // useEffect(() => {
  //   inputRef.current.focus();
  // },[])

  return (
    <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            ref={inputRef}
            type={props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
  )
});

export default Input