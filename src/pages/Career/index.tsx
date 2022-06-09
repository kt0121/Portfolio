import Stack from "@suid/material/Stack";
import { Component } from "solid-js";
import ContentWrapper from "../../component/layouts/ContentWrapper";
import List from "../../component/List";
import { ListProp } from "../../types/list";
const Career: Component = () => {
  return (
    <ContentWrapper>
      <Stack spacing={10}>
        {contents.map((item) => (
          <List {...item} />
        ))}
      </Stack>
    </ContentWrapper>
  );
};

export default Career;

const contents: ListProp[] = [
  {
    title: "キャリア",
    listItems: [
      {
        term: "2019/01 - 2020/03",
        overview: "いきなり!ステーキ",
        descriptions: ["アルバイト"],
      },
      {
        term: "2020/04 - 現在",
        overview: "GeCs, Inc.",
        descriptions: ["インターンシップ"],
        link: "https://annyo.jp/",
      },
      {
        term: "2020/10 - 2022/04",
        overview: "トビラシステムズ株式会社",
        descriptions: ["インターンシップ"],
      },
    ],
  },
];
