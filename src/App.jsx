import { useMemo, useRef } from "react";
// DEVEXTREME
import { Button } from "devextreme-react/button";
import DataGrid, {
  Editing,
  Item,
  Scrolling,
  Toolbar,
} from "devextreme-react/data-grid";
// STYLES
import "./App.css";

function App() {
  // GRID REF
  const gridRef = useRef(null);
  // PRODUCT SAMPLE DATA
  const productList = useMemo(() => {
    return [...Array(1000).keys()].map((itm) => ({
      id: itm + 1,
      title: `Product ${itm + 1}`,
      price: Math.floor(Math.random() * 100),
    }));
  }, []);

  return (
    <>
      <div className="grid-wrapper">
        {/* DATAGRID */}
        <DataGrid
          ref={gridRef}
          dataSource={productList}
          rowAlternationEnabled={true}
          showBorders={true}
          width="100%"
          height="100%"
        >
          {/* TOOLBAR */}
          <Toolbar>
            {/* SAVE BUTTON */}
            <Item location="before">
              <Button icon="save" type="default" stylingMode="contained" />
            </Item>
            {/* NEW ROW BUTTON */}
            <Item name="addRowButton" />
          </Toolbar>
          {/* EDITING */}
          <Editing
            allowUpdating={true}
            allowAdding={true}
            allowDeleting={true}
            mode="cell"
          />
          {/* VIRTUAL SCROLLING */}
          <Scrolling mode="virtual" />
        </DataGrid>
      </div>
    </>
  );
}

export default App;
