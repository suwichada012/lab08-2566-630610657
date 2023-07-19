export const Footer = (props) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © 2023 {props.fullname} {props.studentId}
      </p>
    </div>
  );
};
