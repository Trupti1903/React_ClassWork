










const updateElement = (k1, y1) => {};
return (
    <>
    <h1>Array elements are: {arr1}</h1>
    <br />
    <input 
    type="number"
    onChange={(e) => setVal1(parseInt(e.target.value))}
    placeholder="Enter value to add"
    />
    <br />
    <input
    type = "number"
    onChange={(e) => setVal2(parseInt(e.target.value))}
    placeholder="Enter value to remove"
    />
    <button onClick={() => addElement(val1)}>Add</button>
    <button onClick={() => removeElement(val2)}>Remove</button>
    <button onClick={() => updateElement(val1, val2)}>Update</button>
    </>
);