import React from 'react';
{/* PLOP_ADD_ROUTER */}

function App() {
  return (
    <div className="app">

        <div style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
            <div style={{fontSize: 90, fontFamily: 'Nunito', fontWeight: 200}}>
                React Starter CLI
            </div>
            <div style={{fontSize: 20, fontFamily: 'Nunito', fontWeight: 200, textAlign: 'center'}}>
                <p>Type <code style={{background: '#eee', borderRadius: 3, padding: 3, fontSize: 15, color: '#FF4655'}} >yarn generate page page_name</code> to generate a page</p>
                <p>or <code style={{background: '#eee', borderRadius: 3, padding: 3, fontSize: 15, color: '#FF4655'}} >yarn generate component component_name</code> to generate a component</p>
            </div>
        </div>

        {/* PLOP_MODIFY_ROUTER */}
        
    </div>
  );
}

export default App;
