import React from 'react';
import './Card.css'
export default ( props )=>
<section className={props.className}>
        <div>
            {props.children}
        </div>
        <ul className="tirar">
                    <li><i class="fas fa-campground"></i>nome</li>
                    <li><i class="fas fa-users"></i>numero</li>
                    <li><i class="fas fa-tv"></i>Televisão</li>
                    <li><i class="far fa-check-square"></i>sala</li>    
                    <li><i class="far fa-calendar-alt"></i>data</li>
                </ul>
</section>