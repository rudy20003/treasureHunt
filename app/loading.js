import Icon from "./_components/icons/Icon";
const loading = () => {
  return (
    <div className="fccc w-screen h-screen">
      <Icon iconName="coin" size={24} priority={true} />
      <h1
        className="mt-3"
        style={{
          fontSize: 24,
        }}
      >
        loading...
      </h1>
    </div>
  );
};

export default loading;
