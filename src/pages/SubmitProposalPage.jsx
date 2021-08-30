import { useState } from "react";
import { Button, Form, Input, Tag, Tooltip } from "antd";

function SubmitProposalPage(props) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onFinish = values => {
        setIsSubmitting(true)
      const artistVal = values.artists
      let artistsArr = []
      if (artistVal){
            const artistsValArr = artistVal.split(",")
            artistsArr = artistsValArr.map(artist => {
                  return artist.trim()
            })
      }
      console.log(artistsArr)
      setIsSubmitting (false)
      };

  return (
    <div className="submit-page-proposal container">
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          margin: "0 auto",
          paddingTop: "50px",
        }}
      >
        <Form
          initialValues={{ remember: true }}
          layout="vertical"
          requiredMark="optional"
          onFinish={onFinish}
        >
          <Form.Item
            label="Gallery Name"
            name="gallery_name"
            rules={[{ required: true, message: "Please enter gallery name" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Gallery Address"
            name="gallery_address"
            rules={[
              { required: true, message: "Please enter gallery address" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Gallery Postal Code"
            name="gallery_postal_code"
            rules={[
              { required: true, message: "Please enter gallery postal code" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Artist"
            name="artists"
            rules={[
              { required: true, message: "Please enter artists" },
            ]}
          >
            <Input />
          </Form.Item>


          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="proposal-form-button"
              loading={isSubmitting}
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SubmitProposalPage;
