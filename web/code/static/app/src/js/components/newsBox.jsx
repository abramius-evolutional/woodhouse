var React = require('react');
var PropTypes = React.PropTypes;
var AppStore = require('../stores/store.js');

var NewsBox = React.createClass({
    getInitialState: function () {
        return {
            news: AppStore.getState().news,
            newsTop: AppStore.getState().newsTop
        };
    },
    componentDidMount: function () {
        AppStore.addChangeStoreModuleListener(this.onChange)
    },
    componentWillUnmount: function () {
        AppStore.removeChangeStoreModuleListener(this.onChange);
    },
    onChange: function () {
        this.setState({
            news: AppStore.getState().news,
            newsTop: AppStore.getState().newsTop
        });

    },
    render: function () {
        var newsNode = this.state.newsTop.map(function (prop, id) {
            var discription = null;
            if (prop.description.length <= 550) {
                discription = prop.description;
            }
            else if (prop.description.length > 550) {
                discription = prop.description.substring(0, 550) + '...';
            }
            return(
                <div key={id} className="newsBoxItem">
                    <div><img src={prop.url[0]} alt={prop.title}/></div>
                    <div>
                        <h3>{prop.title}</h3>
                        <p>{discription}</p>
                        <div className="lineNews"></div>
                        <a href="">Подробнее...</a>
                    </div>
                </div>
            );
        })
        return(
            <div className="newsBox">
                <div style={{borderColor: '#fff'}} className="line"></div>
                <span>Новости</span>
                <span>Наши проекты</span>
                {newsNode}
                {/*<div className="newsBoxItem">*/}
                    {/*<div><img src="http://etotdom-39.cdn.pjtsu.com/wp-content/uploads/2014/07/Foto-3-%E2%80%93-Stroitelstvo-sruba.jpg" alt=""/></div>*/}
                    {/*<div>*/}
                        {/*<h3>“Wallflower”</h3>*/}
                        {/*<p>Wallflower debuted at number two on the Canadian Albums Chart, selling 13,000 copies in its first week. In the United States, it entered the Billboard 200 at number ten with first-week sales of 44,000 copies, becoming Krall's. Wallflower debuted at number two on the Canadian Albums Chart, selling 13,000 copies in its first week. In the United States, it entered the Billboard 200 at number ten with first-week sales of 44,000 copies, becoming Krall's</p>*/}
                        {/*<div className="lineNews"></div>*/}
                        {/*<a href="">Подробнее...</a>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="newsBoxItem">*/}
                    {/*<div><img src="http://marimagnat.ru/images/blog/sborka-krovli.jpg" alt=""/></div>*/}
                    {/*<div>*/}
                        {/*<h3>“Wallflower”</h3>*/}
                        {/*<p>Wallflower debuted at number two on the Canadian Albums Chart, selling 13,000 copies in its first week. In the United States, it entered the Billboard 200 at number ten with first-week sales of 44,000 copies, becoming Krall's. Wallflower debuted at number two on the Canadian Albums Chart, selling 13,000 copies in its first week. In the United States, it entered the Billboard 200 at number ten with first-week sales of 44,000 copies, becoming Krall's</p>*/}
                        {/*<div className="lineNews"></div>*/}
                        {/*<a href="">Подробнее...</a>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="newsBoxItem">*/}
                    {/*<div><img src="http://cs317322.vk.me/v317322312/3c81/1qR-KtTNubU.jpg" alt=""/></div>*/}
                    {/*<div>*/}
                        {/*<h3>“Wallflower”</h3>*/}
                        {/*<p>Wallflower debuted at number two on the Canadian Albums Chart, selling 13,000 copies in its first week. In the United States, it entered the Billboard 200 at number ten with first-week sales of 44,000 copies, becoming Krall's. Wallflower debuted at number two on the Canadian Albums Chart, selling 13,000 copies in its first week. In the United States, it entered the Billboard 200 at number ten with first-week sales of 44,000 copies, becoming Krall's</p>*/}
                        {/*<div className="lineNews"></div>*/}
                        {/*<a href="">Подробнее...</a>*/}
                    {/*</div>*/}
                {/*</div>*/}
            </div>
        );
    }
});

module.exports = NewsBox;
