import React from 'react';
import logo from './logo.svg';



function Todo(props) {
  return (
    <div>
        <h1>TO-DO LIST</h1>
        <p>Below is a set of list items that need be done.</p>
        <dl>
            <dt><input type="checkbox" name="list"/>Home Tasks<br/></dt>
            <dd><input type="checkbox" name="ddlist"/>Wash your clothes<br/></dd>
            <dd><input type="checkbox" name="ddlist"/>Make your bed<br/></dd>
            <dt><input type="checkbox" name="list"/>Work Tasks<br/></dt>
            <dd><input type="checkbox" name="ddlist"/>Start Server<br/></dd>
            <dd><input type="checkbox" name="ddlist"/>Set up machine<br/></dd>
        </dl>
    </div>
    );
}
function checked(props){
    const ischecked = props.ischecked;
    if (ischecked){
        return(
            <dl>
                <dt><input type="checkbox" name="list" checked/>Home Tasks<br/></dt>
                <dd><input type="checkbox" name="ddlist" checked/>Wash your clothes<br/></dd>
                <dd><input type="checkbox" name="ddlist"checked/>Make your bed<br/></dd>
            </dl>
        );
    }
        return;
}

export default Todo;
