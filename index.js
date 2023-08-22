exports.decorateTerm = (Term, { React, notify}) => {
    //console.log("Deneme 123")
    return class extends React.Component {
        constructor(props, context) {
            super(props, context)
        }
        render() {
            return React.createElement(
                'div',
                null,
                'Hello World!'
            )
        }
    }
}