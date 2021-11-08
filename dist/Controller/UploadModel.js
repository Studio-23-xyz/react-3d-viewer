import React, { useContext, useState } from 'react';
import { Accordion, ButtonGroup, Form, Button } from 'react-bootstrap';
import { ControlData } from '../Visualaizer';

const UploadModel = () => {
  const {
    visualaizer,
    setVisualaizer,
    setLoading
  } = useContext(ControlData);
  const [uploadType, setUploadType] = useState('file');
  const [file, setFile] = useState();
  const [url, setUrl] = useState();

  const fileUpload = e => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (e === undefined || e.length < 1) {
      alert('no file selected');
    } else {
      var re = /(?:\.([^.]+))?$/;
      var ext = re.exec(e[0].name)[1]; // "txt

      if (ext !== 'gltf' && ext !== 'glb' && ext !== 'obj' && ext !== 'fbx') {
        alert('please select a valid file, only supported glb/gltf, fbx and obj file');
      } else if (ext === 'gltf' || ext === 'glb' || ext === 'obj' || ext === 'fbx') {
        console.log(e.length);
        const url = URL.createObjectURL(e[0]);
        setVisualaizer({ ...visualaizer,
          model: {
            url: url,
            extension: ext
          }
        });
      }
    }
  };

  const urlLoad = e => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);

    if (e === '') {
      alert('no url selected');
    } else {
      var re = /(?:\.([^.]+))?$/;
      var ext = re.exec(e)[1]; // "txt

      if (ext !== 'gltf' && ext !== 'glb' && ext !== 'obj' && ext !== 'fbx') {
        alert('please select a valid url,only supported glb/gltf, fbx and obj url');
      } else if (ext === 'gltf' || ext === 'glb' || ext === 'obj' || ext === 'fbx') {
        const url = e;
        setVisualaizer({ ...visualaizer,
          model: {
            url: url,
            extension: ext
          }
        });
      }
    }
  };

  return /*#__PURE__*/React.createElement(Accordion.Item, {
    eventKey: "4"
  }, /*#__PURE__*/React.createElement(Accordion.Header, {
    className: "according-btn"
  }, "Upload A model"), /*#__PURE__*/React.createElement(Accordion.Body, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "mb-2 w-100"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "info",
    onClick: () => setUploadType('file')
  }, "File Upload"), /*#__PURE__*/React.createElement(Button, {
    onClick: () => setUploadType('url')
  }, "Url Upload")), /*#__PURE__*/React.createElement("div", {
    className: "upload_model"
  }, uploadType === 'file' ? /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "formFile",
    className: "mb-3"
  }, /*#__PURE__*/React.createElement(Form.Label, null, "Upload a gltf/obj/fbx file"), /*#__PURE__*/React.createElement(Form.Control, {
    type: "file",
    onChange: e => setFile(e.target.files)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "w-100 mt-3",
    variant: "success",
    onClick: () => fileUpload(file)
  }, "File Upload")) : /*#__PURE__*/React.createElement(Form.Group, {
    controlId: "formFile",
    className: "mb-3"
  }, /*#__PURE__*/React.createElement(Form.Label, null, "gltf/fbx/obj model url"), /*#__PURE__*/React.createElement(Form.Control, {
    type: "text",
    onChange: e => setUrl(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    className: "w-100 mt-3",
    variant: "success",
    onC0lick: () => urlLoad(url)
  }, "Url Upload")))));
};

export default UploadModel;