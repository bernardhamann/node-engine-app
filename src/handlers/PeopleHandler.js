var React = require('react');
var Header = require('../components/sections/Header');
var Footer = require('../components/sections/Footer');

var meta = {
    path: "/people",
    title: "About Us",
    description: "This is About Us page"
};

var handler = React.createClass({


    render: function() {
        var self = this;

        // self.props.meta.func();

        var people;
        if (self.props.data.message){

            people = self.props.data.message;

        }
        else {
            people = self.props.data.nedb1.map((person, index)=>{
                return (
                    <p key={index}>
                        {person.firstName} <br/>
                        {person.lastName}<br/>
                        {person.email}
                    </p>
                )
            });
        }
        return (
            <body>
                <Header {...self.props} />
                <h2 id="main-title">This is the PeopleHandler</h2>
                {people}
                <Footer />
            </body>
        )
    }
});

exports.handler = handler;
exports.meta = meta;