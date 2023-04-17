import React, { useEffect, useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams, useNavigate } from 'react-router-dom';
import action from '../actions/action';
import NavbarC from './NavbarC';

const Update = () => {
  let [psno, setPsno] = useState("");
  let [pname, setPname] = useState("");
  let [pcategory, setpcategory] = useState("");
  let [pimg, setPimg] = useState("");
  let [pprice, setPprice] = useState("");
  let [pqty, setPqty] = useState("");

  let { id } = useParams();

  let dispatch = useDispatch();

  let product = useSelector(data => data.product.data);

  useEffect(() => {
    if (product) {
      setPsno(product.sno);
      setPname(product.name);
      setpcategory(product.category);
      setPimg(product.imageUrl);
      setPprice(product.price);
      setPqty(product.qty);
    }
  }, [product])

  useEffect(() => {
    dispatch(action.singleProduct(id));
  }, [id]);


  const updateProduct = () => {
    if (psno === "" || pname === "" || pcategory === "" || pimg === "" || pprice === "" || pqty === "") {
      console.log("Please Enter All The data");
    }
    else {
      dispatch(action.updateProduct({
        sno: Number(psno),
        name: pname,
        category: pcategory,
        imageUrl: pimg,
        price: pprice,
        qty: pqty
      }, id))
    }
  };
  return (
    <>
      <NavbarC />
      <Container>
        <h1 className="text-success">Update Product</h1>
        <p className='me-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita dolorum consequatur ipsum alias atque. Veritatis consectetur quam, corrupti odit ipsam reprehenderit expedita, minima culpa ut ducimus ratione nihil vel numquam!</p>
        <Form className='border border-dark shadow-lg rounded mb-3' style={{ width: "450px" }}>
          <div className="heading px-3 pt-3 pb-2 text-white rounded-top bg-success">
            <h3>Selected Product</h3>
          </div>
          <div className="inputs m-3">
            <Form.Group className="my-3" >
              <Form.Control type="text"
                placeholder="Product Serial Number"
                value={psno || ""}
                onChange={(e) => setPsno(e.target.value)}
                className='px-2 py-1'
                style={{ border: "2px solid gray" }} required />
              <div className="hii ms-1 text-danger" id='byy' style={{ fontSize: "14px", display: "none" }}>* enter serial number</div>
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control type="text"
                placeholder="Product Name"
                value={pname || ""}
                onChange={(e) => setPname(e.target.value)}
                className='px-2 py-1'
                style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control
                type="text"
                placeholder="Product Category"
                value={pcategory || ""}
                onChange={(e) => setpcategory(e.target.value)}
                className='px-2 py-1' style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control
                type="text"
                placeholder="Product Image"
                value={pimg || ""}
                onChange={(e) => setPimg(e.target.value)}
                className='px-2 py-1' style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control
                type="text"
                placeholder="Product Price"
                value={pprice || ""}
                onChange={(e) => setPprice(e.target.value)}
                className='px-2 py-1' style={{ border: "2px solid gray" }} required />
            </Form.Group>
            <Form.Group className="my-3" >
              <Form.Control
                type="text"
                placeholder="Product Qty"
                value={pqty || ""}
                onChange={(e) => setPqty(e.target.value)} className='px-2 py-1' style={{ border: "2px solid gray" }} required />
            </Form.Group>
            {/* <n> */}
            <div className="buttons">
              <Button className='bg-success fw-bold text-white px-5 me-3 border-0 rounded' onClick={() => updateProduct()}> Update</Button>
              <Button className='bg-danger p-0 fw-bold text-white border-0 rounded'><Link to="/Admin" className='bg-success px-5 py-2 rounded text-white' style={{ textDecoration: "none" }}>Back</Link></Button>
            </div>
          </div>
        </Form>
      </Container>
    </>
  )
}

export default Update