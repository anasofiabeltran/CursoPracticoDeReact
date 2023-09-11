const sumTotal = (state) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.props.price;
    const sum = state.cart.reduce(reducer, 0);

    console.log(sum)
    return sum
}

export default sumTotal