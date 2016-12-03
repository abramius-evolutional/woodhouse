var React = require('react');
var PropTypes = React.PropTypes;

var Service = React.createClass({
    render: function () {
        return (
            <div className="serviceBox">
                <div className="line"></div>
                <span>Услуги</span>
                <div className="svgServiceBox">
                    <svg>
                        <g>
                            <image x="194px" xlinkHref="/static/img/1.svg"/>
                        </g>
                        <line x1='294' x2='401' y1='50' y2='50' stroke="black" strokeWidth="1" strokeLinecap="round" strokeDasharray="1, 2"/>
                        <polygon points="396,48 401,50 396,52" fill="black" />
                        <g>
                            <image x="401px" xlinkHref="/static/img/2.svg"/>
                        </g>
                        <line x1='501' x2='608' y1='50' y2='50' stroke="black" strokeWidth="1" strokeLinecap="round" strokeDasharray="1, 2"/>
                        <polygon points="603,48 608,50 603,52" fill="black" />
                        <g>
                            <image x="608px" xlinkHref="/static/img/3.svg"/>
                        </g>
                        <line x1={701} x2={716} y1={93} y2={107} stroke="black" strokeWidth="1" strokeLinecap="round" strokeDasharray="1, 2"/>
                        <polygon points="716,103 718,109 712,107"  fill="black" />
                        <g>
                            <image x="708px" y="100px" xlinkHref="/static/img/4.svg"/>
                        </g>
                        <line x1={716} x2={701} y1={193} y2={207} stroke="black" strokeWidth="1" strokeLinecap="round" strokeDasharray="1, 2"/>
                        <polygon points="703,202 707,205 701,207"  fill="black" />
                        <g>
                            <image x="608px" y="200px" xlinkHref="/static/img/5.svg"/>
                        </g>
                        <line x1='501' x2='608' y1="250" y2="250" stroke="black" strokeWidth="1" strokeLinecap="round" strokeDasharray="1, 2"/>
                        <polygon points="506,248 501,250 506,252"  fill="black" />
                        <g>
                            <image x="401px" y="200px" xlinkHref="/static/img/6.svg"/>
                        </g>
                        <line x1='294' x2='401' y1='250' y2='250' stroke="black" strokeWidth="1" strokeLinecap="round" strokeDasharray="1, 2"/>
                        <polygon points="299,248 294,250 299,252"  fill="black" />
                        <g>
                            <image x="194px" y="200px" xlinkHref="/static/img/7.svg"/>
                        </g>
                        <g>
                            <image x="94px" y="300px" xlinkHref="/static/img/8.svg"/>
                        </g>
                        <line x1={202} x2={187} y1={293} y2={307} stroke="black" strokeWidth="1" strokeLinecap="round" strokeDasharray="1, 2"/>
                        <polygon points="189,302 193,305 187,307"  fill="black" />
                    </svg>
                </div>
            </div>
        );
    }
});

module.exports = Service;
