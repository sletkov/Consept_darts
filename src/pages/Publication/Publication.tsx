import React, { useEffect, useState } from "react";
import "./Publication.scss";
import {Button, Card, Form, Input} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorlds } from "../../store/actions/wolrdsActions";
import { useNavigate } from "react-router-dom";
import addWorld from "./AddWorld.png";
import { AddWorldModal } from "../../component/AddWorldModal/AddWorldModal";
import {EnvironmentFilled, LeftOutlined} from "@ant-design/icons";
import {  Radio } from "antd";

const layout = {
    labelCol: { span: 3},
    wrapperCol: { span: 8 },
};

export const Publication = () => {
  const [isModal, setModal] = useState(false);
  const [world, setWorlds] = useState({});
  const [coord, setcoord] = useState({coord_x: 0, coord_y: 0})

  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(-1);
  };

  const dispatch: any = useDispatch();
  const worlds = useSelector((state: any) => state.worldsReducer.worlds);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    dispatch(fetchWorlds());
  };

  const onChange = (item: any) => {
    setWorlds(item);
    console.log(item);
  };

  const relativeCoords = (event:any) => {
      const bounds = event.target.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;

      const img = document.getElementById('relativeCoords')
      const imgWeight = img?.clientHeight
      const imgHeight = img?.clientWidth
      // 16*100/800 x*100/imgHeight = %

      // @ts-ignore
      const coord_y = (y*100)/imgWeight //высота

      // @ts-ignore
      const coord_x = (x*100)/imgHeight //ширина
      setcoord({coord_x:coord_x, coord_y: coord_y
  })
      console.log("размер карты", imgHeight, imgWeight , 'координаты куда нажала', x, y,'координаты точки',coord_x,coord_y)
      return (
          <div className='Publication__dot' style={{
              top: `${coord_y}%`,
              left: `${coord_x}%`
          }}
          >
              <EnvironmentFilled style={{fontSize: 30, color: '#00e1ff'}}  />
          </div>
      )
  }

    return (
    <div className={"Publication"}>
      <Button onClick={handleNavigate} icon={<LeftOutlined />}>
        Назад
      </Button>

      <div className="Publication__wrapper">
        <div className="Publication__title">Выберите мир для публикации</div>
        <div>
          <Radio.Group className="Publication__cardList"  style={{ marginBottom: 40, display: "grid" }}>
            {worlds?.map((item: any, index: number) => (
              <Card
                title={item.name}
                key={index}
                className="Publication__cardlist__card"
                extra={
                  <Radio
                    onChange={() => onChange(item)}
                    className="Publication__cardlist__checkbox"
                    value={index}
                  ></Radio>
                }
              >
                <img src={item.cover_image} alt="photo" />
              </Card>
            ))}
          </Radio.Group>
            <div className="Publication__title">Или создайте новый мир</div>
          <Card title="Создать новый мир" onClick={() => setModal(true)}>
            <img src={addWorld} alt="photo" />
          </Card>
        </div>
      </div>


        <div className="Publication__wrapper">
            <Form {...layout} >
                <Form.Item
                    name="website"
                    rules={[{ required: true, message: 'Пожалуйста, введите название локации!' }]}
                >
                    <div> Название локации </div>
                    <Input  placeholder="Пожалуйста, введите название локации" />
                </Form.Item>

                <Form.Item
                    name="intro"
                    rules={[{ required: true, message: 'Пожалуйста, введите описание локации!'}]}
                >
                    <div> Описание локации </div>
                    <Input.TextArea  maxLength={100} placeholder="Пожалуйста, введите описание локации" />
                </Form.Item>
            </Form>
        </div>



      <AddWorldModal
        isVisible={isModal}
        onClose={() => setModal(false)}
      />
      <div className="Publication__wrapper">
        <div className="Publication__title">Выберите работы для публикации</div>
        <div>
          <Card>
            <img src={addWorld} alt="photo" />
          </Card>
          <div>Расширение для публикаций: jgeg, png</div>
        </div>
      </div>
      <div className="Publication__wrapper">
        <div className="Publication__title">Выберите точку на карте мира</div>
        {world ? (
          <div className="Publication__img"  onClick={relativeCoords}>
            <img src={(world as any)?.map_image} alt="карта" id='relativeCoords'  />
              <div className='Publication__dot' style={{
                  top: `calc(${coord.coord_y}% - 30px)`,
                  left: `calc(${coord.coord_x}% - 15px)`
              }}
              >
                  {coord.coord_x !== 0 &&
                  <EnvironmentFilled style={{fontSize: 30, color: '#00e1ff'}}  />
                  }
              </div>
          </div>
        ) : null}
      </div>
      <Button type={"primary"} className="Publication__post">
        Опубликовать
      </Button>
    </div>
  );
};
