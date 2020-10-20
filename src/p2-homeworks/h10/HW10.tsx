import React from "react";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import Title from "../h4/common/Title/Title";
import {useDispatch, useSelector} from "react-redux";
import {loadingAC} from "./bll/loadingReducer";
import {AppStoreType} from "./bll/store";
import s from './HW10.module.css';
// @ts-ignore

function HW10() {
    // useSelector, useDispatch
    const loading = useSelector((state:AppStoreType) => state.loading.isLoading);
    const dispatch = useDispatch()


    const setLoading = () => {
        dispatch(loadingAC(true))
        setTimeout(() => {
            dispatch(loadingAC(false))
        },10000)
    };


    return (
        <section>

            <Title title="homeworks 10" count="1"/>
            {/*should work (должно работать)*/}
            {loading
                ? (
                    <div className={s.preloader}>
                        <div className={s.text}></div>
                        <div className={s.dymich}>
                            <div className={s.head}>
                                <div className={s.eyes}>
                                    <div className={s.eyeL}>
                                        <div className={s.dot}></div>
                                    </div>
                                    <div className={s.eyeR}>
                                        <div className={s.dot}></div>
                                    </div>
                                </div>
                                <div className={s.mouse}>
                                    <div className={s.dynamic}></div>
                                </div>
                            </div>
                            <div className={s.body}>
                                <div className={s.hands}>
                                    <div className={s.handL}>
                                        <div className={s.subHand}></div>
                                    </div>
                                    <div className={s.handR}>
                                        <div className={s.subHand}></div>
                                    </div>
                                </div>
                                <div className={s.guitar}></div>
                                <div className={s.legs}>
                                    <div className={s.legL}>
                                        <div className={s.subLeg}></div>
                                    </div>
                                    <div className={s.legR}>
                                        <div className={s.subLeg}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={s.cat}>
                            <div className={s.catHead}>
                                <div className={s.catEyes}></div>
                                <div className={s.catEars}></div>
                            </div>
                            <div className={s.tail}></div>
                            <div className={s.catLags}>
                                <div className={s.leg1}></div>
                                <div className={s.leg2}></div>
                                <div className={s.leg3}></div>
                                <div className={s.leg4}></div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <SuperButton className={s.playBtn} onClick={setLoading}>set Dymich loading... </SuperButton>
                    </div>
                )
            }


        </section>
    );
}

export default HW10;
