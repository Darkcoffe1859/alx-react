import React from "react";
import PropTypes from "prop-types";
import { StyleSheet, css } from "aphrodite";

function CourseListRow({ isHeader, textFirstCell, textSecondCell }) {
  const headerStyle = StyleSheet.create({
    headerCell: {
      // Define your header cell styles here
      backgroundColor: "#deb5b545",
    },
  });

  return (
    <tr className={isHeader ? css(styles.header) : css(styles.normal)}>
      {isHeader ? (
        textSecondCell === null ? (
          <th colSpan={2} className={css(headerStyle.headerCell)}>
            {textFirstCell}
          </th>
        ) : (
          <>
            <th>{textFirstCell}</th>
            <th className={css(headerStyle.headerCell)}>{textSecondCell}</th>
          </>
        )
      ) : (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}

const styles = StyleSheet.create({
  header: {
    // Define your header styles here
  },

  normal: {
    // Define your normal styles here
  },
});

CourseListRow.propTypes = {
  isHeader: PropTypes.bool.isRequired,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.string,
};

export default CourseListRow;

