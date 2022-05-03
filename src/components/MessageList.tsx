import Post from "./Post";
import { TPost } from ".././types/types";
import styles from "../styles/message.module.css";
import { Container } from "@mui/material";

export default function MessageList() {
  return (
    <div
      className={styles.message}
      style={{
        marginTop: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
      sx={{marginLeft: 12}}
      >
        <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo quas
      inventore odit recusandae porro beatae consectetur asperiores eveniet,
      laborum natus totam fugit accusamus optio nesciunt non eum, odio, adipisci
      placeat. Quas et beatae esse inventore optio delectus harum exercitationem
      consequatur quo explicabo consectetur, ut alias laborum voluptatibus amet
      laboriosam dolorum deleniti pariatur repellat rerum quibusdam adipisci
      aperiam nihil. Culpa ab alias, ipsa libero ipsam, asperiores sint harum
      tenetur voluptate nesciunt, ullam eligendi eius. Officia, obcaecati! Ab
      officiis consequatur quisquam id veritatis culpa ad. Fuga iusto fugiat
      autem totam explicabo aspernatur excepturi. Atque quisquam, nihil velit
      voluptatem corrupti est harum error?
        </p>
     
      <p className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab,
        necessitatibus itaque eius voluptatum quod modi. A cupiditate officia
        aliquam cum quos facere voluptates? Numquam quasi quas iusto dolorum
        culpa, sapiente eaque tempore, at ad corrupti cum natus assumenda error
        sed similique consequatur saepe rem earum nesciunt temporibus rerum et.
        Provident, eius ab molestias, at pariatur voluptatem suscipit fugiat quo
        eveniet nulla quidem? Beatae cum omnis in totam tenetur. Earum
        perferendis laudantium repudiandae culpa praesentium soluta quod
        inventore doloremque corrupti voluptatum animi facilis labore rerum sit
        odio nostrum, vitae doloribus nulla totam recusandae ipsa! Eligendi
        aliquid consequatur inventore mollitia repellat impedit.
      </p>
      </Container>
   
    </div>
  );
}
