// import Whatwedoimg from "../../assets/about/goal2.jpeg";
import Whatwedoimg from "../../assets/about/about 3.jpg";
const Shapes = () => (
  <>
    <svg
      className="absolute top-0 left-0 -z-10"
      width="62"
      height="62"
      viewBox="0 0 62 62"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 62V0H62C62.0281 34.238 34.2662 62 0 62Z"
        fill="#FF6A35"
        fillOpacity="0.26"
      />
    </svg>

    <svg
      className="absolute bottom-0 left-1/2"
      width="90"
      height="81"
      viewBox="0 0 90 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M85.8436 9.44612L39.2469 77.0032L4.08537 2.92747L85.8436 9.44612Z"
        stroke="#4175DF"
        strokeOpacity="0.78"
        strokeWidth="4"
      />
    </svg>

    <svg
      className="absolute bottom-0 right-0 -z-10"
      width="134"
      height="133"
      viewBox="0 0 134 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M66.9999 133C104.003 133 134 103.227 134 66.5C134 29.773 104.003 0 66.9999 0C29.9968 0 0 29.773 0 66.5C0 103.227 29.9968 133 66.9999 133Z"
        fill="#FF9100"
        fillOpacity="0.59"
      />
    </svg>

    <svg
      className="absolute right-0 top-[10%]"
      width="149"
      height="255"
      viewBox="0 0 149 255"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.2">
        <path
          d="M29.9138 200.627C16.1542 200.627 5 211.61 5 225.159C5 238.709 16.1542 249.692 29.9138 249.692C43.6732 249.692 54.8275 238.709 54.8275 225.159V124.964"
          stroke="#4484AB"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M82.5575 92.916C97.6331 92.916 109.854 80.6999 109.854 65.6317C109.854 50.5624 97.6331 38.3473 82.5575 38.3473C67.4819 38.3473 55.2607 50.5624 55.2607 65.6317C55.2607 80.6999 67.4819 92.916 82.5575 92.916Z"
          stroke="#34C69F"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M82.7746 124.964C116.395 124.964 143.651 98.1094 143.651 64.9819C143.651 31.8548 116.395 5 82.7746 5C49.1538 5 21.8984 31.8548 21.8984 64.9819"
          stroke="#FDB314"
          strokeWidth="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>

    <div className="absolute -top-[15%] -right-[15%] w-[600px] h-[600px] rounded-full bg-slate-100 -z-20" />
  </>
);

const GoalInfo = () => {
  return (
    <header className="py-14 md:py-24 bg-white  text-zinc-900  relative overflow-hidden z-10">
      <Shapes />

      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-12 gap-6 items-center">
          <div className="col-span-12 lg:col-span-7 xl:col-span-6 mb-3 lg:mb-0">
            <div className="max-w-xl">
              <h4 className="text-2xl font-bold leading-tight tracking-wide text-[#3730A3] lg:text-4xl mb-2 text-center lg:text-left ml-3">
                GOAL FOR US IS
              </h4>
              <p className="text-gray-600 text-md leading-relaxed text-left ml-3">
                <br />
                <strong>G </strong>- Gratitude for our customers, stakeholders
                and team members.
                <br />
                <strong>O </strong>- Opportunity for us to serve our customers,
                thereby achieve growth for ourselves.
                <br />
                <strong>A </strong>- Analytics: As a Fintech company we use
                analytic tools to help our customers to get loans with just a
                single click.
                <br />
                <strong>L </strong>- Lending: We intend to be the most
                preferred, transparent, honest, and most loved financial service
                provider.
                <br />
                <br />
                Trust us,{" "}
                <strong className="text-black">
                  we are Committed To Deliver!!!
                </strong>
              </p>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-5 relative text-center">
            <div className="relative">
              <img
                src={Whatwedoimg}
                alt=""
                className="w-full h-full rounded-full mx-auto"
              />
              <div className="absolute w-full h-full left-0 top-0 bg-slate-100  rounded-full -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default GoalInfo;
