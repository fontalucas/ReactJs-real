import Item from  '../Item/Item';

const ItemList = ({burgers, setPage}) => { 
    return (
        
        <div className="parent">
            <div className="div1">
                {burgers.map(prod => <Item key={prod.id} {...prod} setPage={setPage} />)}
            </div>
        </div>
    
    )
}

export default ItemList;