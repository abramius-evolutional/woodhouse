'use strict'

var React = require('react');
var PropTypes = React.PropTypes;

var Portfolio = React.createClass({
    render: function () {
        return(
            <div className="portfolioBox">
                <div className="portfolioTitle">
                    <div className="line"></div>
                    <span>Наши работы</span>
                    <span>Этапы строительства и итоги работы</span>
                </div>
                <div>
                    <div>
                        <img src="http://srub-penza.ru/_mod_files/ce_images/common/1306744335_0.jpg" alt=""/>
                    </div>
                    <div></div>
                </div>
                <div>
                    <div>
                        <img src="http://marimagnat.ru/images/blog/sborka-krovli.jpg" alt=""/>
                    </div>
                    <div></div>
                </div>
                <div>
                    <div>
                        <img src="http://stroika-smi.ru/images/stories/publications-zagorodstroy/srub-doma-bani.jpg" alt=""/>
                    </div>
                    <div></div>
                </div>
                <button>Перейти в галерею</button>
            </div>
        );
    }
});

module.exports = Portfolio;
