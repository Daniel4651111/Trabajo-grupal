import React, { useState } from 'react';
import './App.css';
import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import Home from './components/Home';
import ProductosList from './components/ProductosList';
import ProductosForm from './components/ProductosForm';
import Contactos from './components/Contactos';
import Proveedores from './components/ProductosList';
import About from './components/About';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { AppstoreOutlined, SearchOutlined } from '@ant-design/icons';
import Button from 'antd/lib/button/button';
import CategoriaList from './components/CategoriasList';
import CategoriaForm from './components/CategoriasForm';
import ProveedoresList from './components/ProveedoresList';

const { SubMenu } = Menu;
const { Header, Footer, Content } = Layout;

function AppMenu() {
  const [current, setCurrent] = useState()
  return (

// DEFINICION DE LA ESTRUCTURA DEL MENU PRINCIPAL - BARRA DE ARRIBA
    <Menu onClick={(value) => setCurrent(value)} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Menu.Item>

      {/* <SubMenu key="tasks" icon={<AppstoreOutlined />} title="Tasks">
        <Menu.Item key="tasks:1"><Link to="/tasks">Tasks</Link></Menu.Item>
        <Menu.Item key="tasks:2"><Link to="/tasks/new">New Task</Link></Menu.Item>
      </SubMenu> */}

      <SubMenu key="productos" icon={<AppstoreOutlined />} title="Productos">
        <Menu.Item key="productos:1"><Link to="/productos">Productos</Link></Menu.Item>
        <Menu.Item key="productos:2"><Link to="/productos/new">Nuevo Producto</Link></Menu.Item>
      </SubMenu>

{/* categoria */}
      <SubMenu key="categorias" icon={<AppstoreOutlined />} title="Categorias">
        <Menu.Item key="categorias:1"><Link to="/categorias">Categorías</Link></Menu.Item>
        <Menu.Item key="categorias:2"><Link to="/categorias/new">Nueva Categoría</Link></Menu.Item>
      </SubMenu>


{/* Proveedores */}
<SubMenu key="Proveedores" icon={<AppstoreOutlined />} title="Proveedores">
        <Menu.Item key="proveedores:1"><Link to="/Proveedores">Proveedores</Link></Menu.Item>
        <Menu.Item key="proveedores:2"><Link to="/Proveedores/new">Nuevo Proveedor</Link></Menu.Item>
      </SubMenu>

      <Menu.Item key="contactos" icon={<AppstoreOutlined />}>
        <Link to="/contactos">Contactos</Link>
      </Menu.Item>
      <Menu.Item key="about" icon={<AppstoreOutlined />}>
        <Link to="/about">About</Link>
      </Menu.Item>
    </Menu>
  );
}

//EJEMPLO DE TASK PARA GUIARNOS
/* function TaskRoutes({ match }) {
  return (
    <>
      <Route exact path={`${match.path}/new`} component={TaskForm} />
      <Route
        exact
        path={`${match.path}/edit/:taskId`}
        component={TaskForm}
      />
      <Route exact path={`${match.path}/`} component={TaskList} />
    </>
  );
} */

//DEFINIR RUTAS DE PRODUCTOS
function ProductosRoutes(props) {
  return (
    <>
      <Route exact path={`${props.match.path}/new`} component={ProductosForm} />
      <Route
        exact
        path={`${props.match.path}/edit/:typeID`}
        component={ProductosForm}
      />
      <Route exact path={`${props.match.path}/`} component={ProductosList} />
    </>
  );
}
function CategoriaRoutes(props) {
  return (
    <>
      <Route exact path={`${props.match.path}/new`} component={CategoriaForm} />
      <Route
        exact
        path={`${props.match.path}/edit/:typeID`}
        component={CategoriaForm}
      />
      <Route exact path={`${props.match.path}/`} component={CategoriaList} />
    </>
  );
}

function ProveedorRoutes(props) {
  return (
    <>
      {/* <Route exact path={`${props.match.path}/new`} component={ProveedoresForm} />
      <Route
        exact
        path={`${props.match.path}/edit/:typeID`}
        component={ProveedoresForm}
      /> */}
      <Route exact path={`${props.match.path}/`} component={ProveedoresList} />
    </>
  );
}

//ESTRUCTURA DE LA PÁGINA EN SÍ
function App() {
  return (
    <Router>
      <Layout>
        <Header style={{ color: 'white', fontSize: 30, textAlign: 'center' }}>
          <div>ToDo List</div>
        </Header>

        <Content>
          <div className="site-layout-content">
            <AppMenu />
            <br />
            {/* Secccion donde se van a mostrar los diferentes componentes que rendericemos */}
            <>
              <Route path="/" exact component={Home} />
              <Route path="/productos" component={ProductosRoutes} />
              <Route path="/categorias" component={CategoriaRoutes} />
              <Route path="/proveedores" component={ProveedorRoutes} />
              <Route path="/contactos" component={Contactos} />
              <Route path="/about" component={About} />
              {/* Hacemos esto porque tasks tiene subrutas */}
              {/* <Route path="/tasks" component={TaskRoutes} /> */}
            </>
          </div>
        </Content>

        <Footer style={{ textAlign: 'center' }}>
          <p>Teléfono</p>
          <p>Dirección</p>
          <p>Ciudad - País</p>
        </Footer>
      </Layout>
    </Router>

  );
}

export default App;
