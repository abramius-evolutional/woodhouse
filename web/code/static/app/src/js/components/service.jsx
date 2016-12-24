var React = require('react');
var PropTypes = React.PropTypes;

var Service = React.createClass({
    render: function () {
        return (
            <div className="serviceBox">
                <div className="line"></div>
                <span>Услуги</span>
                <div className="svgServiceBox">
                    <div className="itemService">
                        <div style={{background: 'url(/static/img/1.svg) no-repeat center'}}></div>
                        <span>СОЗДАНИЕ ИНДИВИДУАЛЬНОГО ПРОЕКТА, ДИЗАЙНА.</span>
                        <div className="infoBoxService">
                            <h3>СОЗДАНИЕ ИНДИВИДУАЛЬНОГО ПРОЕКТА, ДИЗАЙНА.</h3>
                            <ul>
                                <li>проектирование любой сложности</li>
                                <li>скизный проект, 3D визуализация</li>
                                <li>рабочий проект</li>
                                <li>рабочие чертежи, инженерные расчеты</li>
                            </ul>
                        </div>
                    </div>
                    <div className="itemService">
                        <div style={{background: 'url(/static/img/4.svg) no-repeat center'}}></div>
                        <span>ОТБОР И ПОДГОТОВКА КАЧЕСТВЕННОГО ЛЕСА.</span>
                        <div className="infoBoxService">
                            <h3>ОТБОР И ПОДГОТОВКА КАЧЕСТВЕННОГО ЛЕСА.</h3>
                            <ul>
                                <li>щательный отбор леса при покупке</li>
                                <li>ручная обработка</li>
                                <li>антисептирование</li>
                            </ul>
                        </div>
                    </div>
                    <div className="itemService">
                        <div style={{background: 'url(/static/img/3.svg) no-repeat center'}}></div>
                        <span>ИЗГОТОВЛЕНИЕ СРУБА ИЛИ КАРКАСА POST & BEAM НА НАШЕЙ СТРОЙПЛОЩАДКЕ.</span>
                        <div className="infoBoxService">
                            <h3>ИЗГОТОВЛЕНИЕ СРУБА ИЛИ КАРКАСА POST & BEAM НА НАШЕЙ СТРОЙПЛОЩАДКЕ.</h3>
                            <ul>
                                <li>рубка сруба по разным технологиям</li>
                                <li>в русскую классическую чашку</li>
                                <li>в канадскую чашку с верхними затесами</li>
                                <li>в канадскую чашку (бриллиантовый угол) с верхними
                                    и нижними затесами</li>
                                <li>лафет с норвежской чашкой</li>
                                <li>каркасно-бревенчатая технология post & beam</li>
                            </ul>
                        </div>
                    </div>
                    <div className="itemService">
                        <div style={{background: 'url(/static/img/6.svg) no-repeat center'}}></div>
                        <span>ТРАНСПОРТИРОВКА ДО МЕСТА НАЗНАЧЕНИЯ.</span>
                        <div className="infoBoxService">
                            <h3>ТРАНСПОРТИРОВКА ДО МЕСТА НАЗНАЧЕНИЯ.</h3>
                            <ul>
                                <li>бережная погрузка на еврофуры</li>
                                <li>разгрузка на заранее подготовленное место</li>
                            </ul>
                        </div>
                    </div>
                    <div className="itemService">
                        <div style={{background: 'url(/static/img/7.svg) no-repeat center'}}></div>
                        <span>СБОРКА СРУБА / МОНТАЖ КОНСТРУКЦИИ НА ФУНДАМЕНТ.</span>
                        <div className="infoBoxService">
                            <h3>СБОРКА СРУБА / МОНТАЖ КОНСТРУКЦИИ НА ФУНДАМЕНТ.</h3>
                            <ul>
                                <li>сборка сруба с межвенцовым утеплителем</li>
                                <li>монтаж конструкции post & beam с металлоэлементами и специальным утеплителем для узлов</li>
                            </ul>
                        </div>
                    </div>
                    <div className="itemService">
                        <div style={{background: 'url(/static/img/8.svg) no-repeat center'}}></div>
                        <span>МОНТАЖ КРЫШИ.</span>
                        <div className="infoBoxService">
                            <h3>МОНТАЖ КРЫШИ.</h3>
                            <ul>
                                <li>утепленные, вентилируемые крыши</li>
                                <li>крыши любой сложности</li>
                            </ul>
                        </div>
                    </div>
                    <div className="itemService">
                        <div style={{background: 'url(/static/img/2.svg) no-repeat center'}}></div>
                        <span>ОТДЕЛОЧНЫЕ РАБОТЫ ПОД КЛЮЧ.</span>
                        <div className="infoBoxService">
                            <h3>ОТДЕЛОЧНЫЕ РАБОТЫ ПОД КЛЮЧ.</h3>
                            <ul>
                                <li>шлифовка</li>
                                <li>покраска</li>
                                <li>коммуникации</li>
                                <li>элементы интерьера, декор</li>
                                <li>мебель ручной работы</li>
                            </ul>
                        </div>
                    </div>
                    <div className="itemService">
                        <div style={{background: 'url(/static/img/5.svg) no-repeat center'}}></div>
                        <span>ГАРАНТИИ И ДАЛЬНЕЙШЕЕ ОБСЛУЖИВАНИЕ.</span>
                        <div className="infoBoxService">
                            <h3>ГАРАНТИИ И ДАЛЬНЕЙШЕЕ ОБСЛУЖИВАНИЕ.</h3>
                            <ul>
                                <li>следим за усадкой сруба</li>
                                <li>обслуживаем сруб до полной полной усадки</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Service;
