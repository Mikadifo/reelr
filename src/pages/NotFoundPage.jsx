import Button from "@components/Button";

function NotFoundPage() {
  return (
    <section className="text-center max-w-[519px] mx-auto mt-52 relative z-10">
      <div className="bg-red absolute size-[400px] rounded-full -z-10 blur-2xl opacity-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <h1 className="text-cyan font-bold font-heading text-8xl mb-4">404</h1>
      <p className="font-body text-2xl text-white-accent mb-11">
        Sorry, the page you’re looking for cannot be found. Check the URL and
        try again.
      </p>

      <Button
        className="bg-linear-to-r from-cyan to-red text-white flex w-fit mx-auto gap-2.5 items-center"
        link
        to="/"
      >
        Home Page
      </Button>
    </section>
  );
}

export default NotFoundPage;
