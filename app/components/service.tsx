import styles from "@/app/components/home.module.scss";
import {IconButton} from "@/app/components/button";
import ReturnIcon from "@/app/icons/return.svg";
import Locale from "@/app/locales";
import {Path} from "@/app/constant";
import React from "react";
import {useNavigate} from "react-router-dom";


export function Service() {
    const navigate = useNavigate();
    return (
        <div>


            <div className="window-actions">
                <div className={"window-action-button"}>
                    <IconButton
                        icon={<ReturnIcon />}
                        title={Locale.Chat.Actions.ChatList}
                        onClick={() => navigate(Path.Home)}
                    />
                </div>


            </div>

        <div className={styles["service-block"]}>

            <div className={styles["service-block-item"]}>
                <span className={styles["service-tip"]}>咨询或购买请长按保存二维码，去微信添加</span>
            </div>
        <div className={styles["service-block-item"]}>
            <img src="/service.jpg" width="256"/>
        </div>

            <div className={styles["service-block-item"]}>
                <a href="weixin://dl/scan">
                    <span className={styles["btn-primary"]}>去微信添加</span>
                </a>
            </div>
        </div>
    </div>)
}