'use strict'

var React = require('react');
var PropTypes = React.PropTypes;

var ReviewsItem = React.createClass({
    render: function () {
        var discription;
        if (this.props.prop.description.length <= 150) {
            discription = this.props.prop.description;
        }
        else if (this.props.prop.description.length > 150) {
            discription = this.props.prop.description.substring(0, 150) + '...'
        }
        return(
            <li>
                <img src="http://livedemo00.template-help.com/wordpress_49230/wp-content/uploads/2014/05/Depositphotos_11581353_EL4_03-170x179.jpg" />
                <div>
                    <h4>{this.props.prop.title}</h4>
                    <p>
                        {discription}
                    </p>
                    <a href="#">подробнее...</a>
                </div>
            </li>
        );
    }
});

module.exports = ReviewsItem;
