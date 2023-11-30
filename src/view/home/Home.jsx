import React, { useEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useReactToPrint } from "react-to-print";

// // static import
import DashboardTopBar from "../../components/dashboardTopBar/DashboardTopBar";
import TableTopbar from "../../components/tableTopBar/TableTopbar";
import DynamicTable from "../../components/dynamicTable/dynamicTable";
import tableHead from "../../assets/data/tableData/tableHead.json";
import Actions from "../../components/actions/Actions";
import Badges from "../../components/badges/Badges";
import MissingProductModal from "./modal/MissingProductModal";
import EditProductModal from "./modal/EditProductModal";
import { getProductOrderList, updateOrderStatus } from "../../store/actions";

function Home() {
  // // initial state
  const dispatch = useDispatch();
  const componentPDF = useRef();

  // // redux state
  const { productOrderData } = useSelector((state) => state.productOrder);

  // // local state
  const [searchValue, setSearchValue] = useState("");

  const [missingProductModal, setMissingProductModal] = useState({
    open: false,
    productData: null,
  });
  const [editProductModal, setEditProductModal] = useState({
    open: false,
    productData: null,
  });

  // // function
  const handelProductsStatus = (id) => {
    dispatch(updateOrderStatus({ _id: id, status: "approved" }));
  };

  const generatePDF = useReactToPrint({
    content: () => componentPDF.current,
    documentTitle: "Order data",
  });

  // insert data
  let rows = [];
  rows = productOrderData?.map((item, index) => {
    const productName = (
      <Box sx={{ display: "flex", alignItems: "center", columnGap: 1 }}>
        <img
          src={item.productImg}
          alt="product img"
          style={{ width: "50px" }}
        />
        {item.productName}
      </Box>
    );
    const price = (
      <>
        ${item.price} <br />
        {item.discountedPrice ? (
          <del className="muted">{item.discountedPrice}</del>
        ) : (
          ""
        )}
      </>
    );
    const quantity = (
      <>
        <b>{item.quantity}</b>x{item.quantity2} <br />
        {item.discountedQuantity ? (
          <del className="muted">{item.discountedQuantity}</del>
        ) : (
          ""
        )}
      </>
    );
    const total = (
      <>
        ${item.total} <br />
        {item.discountedTotal ? (
          <del className="muted">{item.discountedTotal}</del>
        ) : (
          ""
        )}
      </>
    );
    const actions = (
      <Actions
        check={() => handelProductsStatus(item?._id)}
        cross={() => setMissingProductModal({ open: true, productData: item })}
        edit={() => setEditProductModal({ open: true, productData: item })}
        orderStatus={item.status}
      />
    );
    const status = <Badges orderStatus={item.status} />;

    return { ...item, productName, price, quantity, total, actions, status };
  });

  useEffect(() => {
    dispatch(getProductOrderList({ search: searchValue }));
  }, [searchValue]);
  return (
    <Container maxWidth="xl" sx={{ px: { lg: "67px !important" } }}>
      <DashboardTopBar />
      <Box
        sx={{
          border: "1px solid lightGray",
          borderRadius: 1,
          px: 4,
          py: 2,
          mt: 3,
        }}
      >
        <TableTopbar
          searchValue={searchValue}
          setSearchValue={setSearchValue}
          print={generatePDF}
        />
        <Box ref={componentPDF}>
          <DynamicTable tableHead={tableHead} tableBodyData={rows} />
        </Box>
      </Box>

      <MissingProductModal
        open={missingProductModal.open}
        onClose={() =>
          setMissingProductModal({ ...missingProductModal, open: false })
        }
        productsDetails={missingProductModal.productData}
      />
      <EditProductModal
        open={editProductModal.open}
        onClose={() =>
          setEditProductModal({ ...editProductModal, open: false })
        }
        productsDetails={editProductModal.productData}
      />
    </Container>
  );
}

export default Home;
