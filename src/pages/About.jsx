import React from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import { useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-zinc-950 via-zinc-900 to-zinc-950 text-white">
        <div className="max-w-6xl mx-auto px-6 py-16">
          {/* Heading */}
          <div className="text-center mb-14">
            <h1 className="text-5xl font-bold">
              About <span className="text-olive-400">SkyMart</span>
            </h1>
            <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">
              Your one-stop destination for quality products, seamless shopping,
              and an exceptional online experience.
            </p>
          </div>

          {/* Story */}
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Our Story</h2>

              <p className="text-zinc-300 leading-8">
                SkyMart was built with a simple mission—make online shopping
                fast, secure, and enjoyable. Whether you're looking for the
                latest electronics, stylish fashion, home essentials, or
                everyday products, SkyMart brings everything together in one
                convenient platform.
              </p>

              <p className="text-zinc-300 leading-8 mt-5">
                We focus on providing a smooth shopping experience with a clean
                interface, secure authentication, responsive design, and a
                customer-first approach.
              </p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-olive-400 mb-6">
                Why Choose SkyMart?
              </h3>

              <div className="space-y-5">
                <div className="flex gap-4">
                  <div className="text-2xl">🚚</div>
                  <div>
                    <h4 className="font-semibold">Fast Delivery</h4>
                    <p className="text-zinc-400">
                      Reliable shipping with timely delivery.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">🔒</div>
                  <div>
                    <h4 className="font-semibold">Secure Shopping</h4>
                    <p className="text-zinc-400">
                      Your data and payments are protected.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">💎</div>
                  <div>
                    <h4 className="font-semibold">Quality Products</h4>
                    <p className="text-zinc-400">
                      Carefully selected products from trusted sellers.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="text-2xl">💬</div>
                  <div>
                    <h4 className="font-semibold">24/7 Support</h4>
                    <p className="text-zinc-400">
                      Friendly customer support whenever you need help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
              <h2 className="text-4xl font-bold text-olive-400">10K+</h2>
              <p className="text-zinc-400 mt-2">Happy Customers</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
              <h2 className="text-4xl font-bold text-olive-400">5K+</h2>
              <p className="text-zinc-400 mt-2">Products</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
              <h2 className="text-4xl font-bold text-olive-400">100+</h2>
              <p className="text-zinc-400 mt-2">Trusted Brands</p>
            </div>

            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 text-center">
              <h2 className="text-4xl font-bold text-olive-400">24/7</h2>
              <p className="text-zinc-400 mt-2">Customer Support</p>
            </div>
          </div>

          {/* Mission */}
          <div className="mt-20 bg-zinc-900 border border-zinc-800  rounded-2xl">
            <div className=" p-5 text-center">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>

              <p className="text-zinc-300 max-w-3xl mx-auto leading-8 ">
                At SkyMart, our mission is to make online shopping accessible,
                affordable, and enjoyable for everyone. We continuously improve
                our platform by embracing modern technology, ensuring security,
                and delivering a seamless user experience.
              </p>
            </div>
            <div className="p-5 text-center border-t-zinc-800">
              <h2 className="text-3xl font-bold mb-4">Continue to Shop?</h2>
              <p className="text-zinc-300 w-fit mx-auto leading-8 px-5 py-3 hover:bg-olive-950/85 rounded-2xl cursor-pointer"
              onClick={()=> navigate("/shop")}
              >Browse Products <span><i class="ri-arrow-right-long-fill"></i></span></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
