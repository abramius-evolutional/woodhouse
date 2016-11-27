'use strict'

var React = require('react');
var PropTypes = React.PropTypes;

var ReviewsItem = React.createClass({
    render: function () {
        return(
            <li>
                <img src="http://livedemo00.template-help.com/wordpress_49230/wp-content/uploads/2014/05/Depositphotos_11581353_EL4_03-170x179.jpg" />
                <div>
                    <h4>Most Viewed</h4>
                    <p>
                        nulla facilisi. aenean nec eros. vestibulum ante ipsum primis in faucibu. suspendisse congue 1986 viverra nunc sed ultrices. aliquam erat volutpat. sed...
                    </p>
                    <a href="#">подробнее...</a>
                </div>
            </li>
        );
    }
});

module.exports = ReviewsItem;
