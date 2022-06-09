import { Component } from "solid-js";
import List from "../../component/List";
import ContentWrapper from "../../component/layouts/ContentWrapper";
import { ListProp } from "../../types/list";
import Stack from "@suid/material/Stack";
import Profile from "../../component/Profile";

const Home: Component = () => {
  return (
    <ContentWrapper>
      <Stack spacing={10}>
        <Profile />
        {contents.map((item) => (
          <List {...item} />
        ))}
      </Stack>
    </ContentWrapper>
  );
};

export default Home;

const contents: ListProp[] = [
  {
    title: "学歴",
    listItems: [
      {
        term: "2015/04/01 - 2018/03/31",
        overview: "名古屋高校",
        descriptions: ["サッカー部所属"],
      },
      {
        term: "2018/04/01 - 2022/03/31",
        overview: "名古屋大学",
        descriptions: [
          "情報学部コンピュータ科学部 知能システム学専攻",
          "外山研究室所属",
          "卒業論文題目「文の意味的類似度評価タスクにおけるグラフ構造の利用」",
        ],
        link: "https://github.com/kt0121/grad_research",
      },
      {
        term: "2022/04/01 - 現在",
        overview: "名古屋大学大学院",
        descriptions: ["情報学研究科 知能システム学専攻", "井手研究室所属"],
      },
    ],
  },
  {
    title: "資格",
    listItems: [
      {
        term: "2021/06",
        overview: "TOEIC 780点",
      },
    ],
  },
  {
    title: "趣味",
    listItems: [
      {
        term: "幼少期 - 現在",
        overview: "旅行",
        descriptions: [
          "昔からどこかに連れて行ってもらうのが好きでした",
          "最近では自分で行けるところが増えて楽しいです",
        ],
      },
      {
        term: "幼少期 - 現在",
        overview: "ゲーム",
        descriptions: [
          "ValorantとApexやってます",
          "Valorant最高到達ランク: イモータル1",
          "Apex最高到達ランク: ダイヤ4",
        ],
      },
    ],
  },
];
