const WorkerSignup = () => {
  const workerServices = [
    { name: "Pharmacy", value: "pharmacy" },
    { name: "Ambulance", value: "ambulance" },
    { name: "Health care assistant", value: "health-care-assistant" },
    { name: "At Home Care", value: "at-home-care" },
    { name: "Physical Treatment", value: "physical-treatment" },
    { name: "Geriatric Care", value: "geriatric-care" },
    { name: "Mental Health Services", value: "mental-health-services" },
    { name: "Dental Care", value: "dental-care" },
    { name: "Optometry", value: "optometry" },
    { name: "Chiropractic Services", value: "chiropractic-services" },
  ];
  return (
    <div>
      <header>
        <h1>WORKER SIGNUP</h1>
      </header>
      <main>
        <section>
          <form>
            {workerServices.map((service) => (
              <div style={{ width: "50px", height: "50px" }}></div>
            ))}
          </form>
        </section>
      </main>
    </div>
  );
};

export default WorkerSignup;
