import React from "react";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import Review from "./Review";

// Variants in framer-motion define visual states
// that a rendered motion component can be in at
// any given time.

const xOffset = 100;
const variants = {
    enter: (direction) => ({
        x: direction > 0 ? xOffset : -xOffset,
        opacity: 0
    }),
    active: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2 }
    },
    exit: (direction) => ({
        x: direction > 0 ? -xOffset : xOffset,
        opacity: 0
    })
};

const pages = [0, 1, 2, 3, 4];

const Carousel = ({ currentPage, setPage, direction }) => {
    /* Add and remove pages from the array to checkout
       how the gestures and pagination animations are
       fully data and layout-driven. */
    const hasPaginated = useRef(false);

    function detectPaginationGesture(e, { offset }) {
        if (hasPaginated.current) return;
        let newPage = currentPage;
        const threshold = xOffset / 2;

        if (offset.x < -threshold) {
            // If user is dragging left, go forward a page
            newPage = currentPage + 1;
        } else if (offset.x > threshold) {
            // Else if the user is dragging right,
            // go backwards a page
            newPage = currentPage - 1;
        }

        if (newPage !== currentPage) {
            hasPaginated.current = true;
            // Wrap the page index to within the
            // permitted page range
            newPage = wrap(0, pages.length, newPage);
            setPage(newPage, offset.x < 0 ? 1 : -1);
        }
    }

    return (
        <div className="slider-container">
            <AnimatePresence
                // This will be used for components to resolve
                // exit variants. It's necessary as removed
                // components won't rerender with
                // the latest state (as they've been removed)
                custom={direction}>
                <motion.div
                    key={currentPage}
                    className="slide"
                    data-page={currentPage}
                    variants={variants}
                    initial="enter"
                    animate="active"
                    exit="exit"
                    drag="x"
                    onDrag={detectPaginationGesture}
                    onDragStart={() => (hasPaginated.current = false)}
                    onDragEnd={() => (hasPaginated.current = true)}
                    // Snap the component back to the center
                    // if it hasn't paginated
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    // This will be used for components to resolve all
                    // other variants, in this case initial and animate.
                    custom={direction}
                >
                    <Review />
                    <Review />
                    <Review />
                    <Review />
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Carousel;