import { globalStyle } from "@vanilla-extract/css";

globalStyle("body", {
  margin: 0,
  fontFamily: `"ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro",Osaka, "メイリオ", Meiryo, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif`,
});

globalStyle("*", {
  boxSizing: "border-box",
  MozBoxSizing: "border-box",
  WebkitBoxSizing: "border-box",
});
