import { useState, useEffect, useRef, useContext } from "react";
import GC from "@grapecity/spread-sheets";
import "@grapecity/spread-sheets-io";
import { IO } from "@grapecity/spread-excelio";
import { saveAs } from "file-saver";
import "@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css";

export const excelDown = (title, columnInfo, list) => {
  if (!title) {
    console.log("Title is Null");
    return false;
  } else if (columnInfo === null || columnInfo.length === 0) {
    console.log("Column Info is Null");
  } else if (list === null || list.length === 0) {
    console.log("list is Null");
  }

  const titleStyle = new GC.Spread.Sheets.Style();
  titleStyle.foreColor = "black";
  titleStyle.backColor = "rgb(255, 255, 84)";
  titleStyle.font = "bold 15px Arial";
  titleStyle.hAlign = GC.Spread.Sheets.HorizontalAlign.center;
  titleStyle.vAlign = GC.Spread.Sheets.VerticalAlign.center;

  const excelIo = new IO();
  const spread = new GC.Spread.Sheets.Workbook("", { sheetCount: 1, allowUserZoom: false });
  const sheet = spread.getSheet(0);
  sheet.setColumnCount(columnInfo.length);
  sheet.setRowHeight(0, 40);

  sheet.suspendPaint();

  //Header Area
  for (let i = 0; i < columnInfo.length; i++) {
    sheet.setValue(0, i, columnInfo[i].headerName);
    sheet.setStyle(0, i, titleStyle);
    sheet.setColumnWidth(i, 120);
  }
  sheet
    .getRange(0, 0, 1, columnInfo.length)
    .setBorder(new GC.Spread.Sheets.LineBorder("Black", GC.Spread.Sheets.LineStyle.thin), { all: true });

  //List Data Area
  for (let k = 0; k < list.length; k++) {
    for (let z = 0; z < list[k].length; z++) {
      sheet.setValue(k + 1, z, list[k][z]);
      sheet.setColumnWidth(k, 120);
    }
  }

  const json = spread.toJSON();
  const fileName = title + ".xlsx";

  excelIo.save(json, function (blob) {
    saveAs(blob, fileName);
  });
};
