import React from 'react';
import './Card.css'
export default ( props )=>
<section className={props.className}>
        <div>
            {props.children}
        </div>
      
</section>