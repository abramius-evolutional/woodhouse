'use strict'

var React = require('react');
var PropTypes = React.PropTypes;

var ReviewsItem = React.createClass({
    render: function () {
        // console.log('rewItems', this.props.prop);
        var discription;
        if (this.props.prop.description.length <= 150) {
            discription = this.props.prop.description;
        }
        else if (this.props.prop.description.length > 150) {
            discription = this.props.prop.description.substring(0, 150) + '...'
        }
        return(
            <li>
                <img src={this.props.prop.url} />
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
