function Loop() {
    return (
        <div>
            <h2>list</h2>
            <Item></Item>
        </div>
    );
}

function Item() {
    const items = [
        { name: "apple", price: 5000 },
        { name: "banana", price: 3000 },
        { name: "mango", price: 1000 }
    ];
    return (
        <div>
            {items.map(item =>
                <div>
                    <h4>item name : {item.name}</h4> <p>item price : {item.price}</p>
                </div>
            )}
        </div>
    );
}

export default Loop;