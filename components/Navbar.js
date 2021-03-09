// components/NavBar.js

const navBarStyle = {
  backgroundColor: "gray",
  color: "white",
  width: "100%",
  height: "60px"
};

const NavBar = () => (
  <div class="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
  <ul class="list-reset flex justify-between flex-1 md:flex-none items-center">
    <li class="mr-3">
    <a class="inline-block py-2 px-4 text-white no-underline" href="#">Active</a>
    </li>
    <li class="mr-3">
    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/">Home</a>
    </li>
    <li class="mr-3">
    <a class="inline-block text-gray-600 no-underline hover:text-gray-200 hover:text-underline py-2 px-4" href="/contact">Contact</a>
    </li>
  </ul>
</div>


);

export default NavBar;