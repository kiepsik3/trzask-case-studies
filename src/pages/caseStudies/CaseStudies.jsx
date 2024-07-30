import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Headline1, Headline3 } from "../../typography/Headlines/Headlines";
import Paragraph from "../../typography/Paragraph/Paragraph";
import CaseStudy from "./caseStudy/CaseStudy";
import Button from "../../components/Button/Button";
import { CaseStudiesFilters } from "./Filters/CaseStudiesFilters";
import { useLocation, useHistory } from "react-router-dom";
import "./case-studies.less";

export default function CaseStudies(props) {
  const location = useLocation();
  const history = useHistory();
  const queryParamsFilters = new URLSearchParams(location.search);

  const { title, caption, img, alt, items } = props;
  const [itemsAmount, setItemsAmount] = useState(5);
  const [filters, setFilters] = useState(
    queryParamsFilters.get("filters")?.split(",") || [],
  );

  useEffect(() => {
    const data = window.localStorage.getItem("itemsAmount");
    if (data !== null) setItemsAmount(JSON.parse(data));
  }, []);

  useEffect(() => {
    window.localStorage.setItem("itemsAmount", itemsAmount);
  }, [itemsAmount]);

  function onFilterChange(e) {
    if (filters.includes(e.target.value)) {
      setFilters(filters.filter((a) => a !== e.target.value));
    } else {
      setFilters([...filters, e.target.value]);
    }
  }

  const filteredItems = items.filter((item) =>
    filters.every((tag) => item.tags?.includes(tag)),
  );

  useEffect(() => {
    history.push({
      search: filters.length > 0 ? `?filters=${filters.join()}` : "",
    });
  }, [filters]);

  return (
    <div className="case-studies">
      <Container>
        <Row className="case-studies-header">
          <Col sm={6} className="case-studies-info">
            <Headline1 violet>{title}</Headline1>
            <Paragraph opacity>{caption}</Paragraph>
          </Col>

          <Col sm={6}>
            <img
              src={img}
              alt={alt ? alt : "case-studies-image"}
              className="case-studies-img"
            />
          </Col>
        </Row>
      </Container>

      <CaseStudiesFilters
        onFilterChange={onFilterChange}
        activeFilters={filters}
      />

      <Container>
        {filters.length > 0 ? (
          filteredItems.length > 0 ? (
            filteredItems.map((i, idx) => <CaseStudy {...i} key={idx} />)
          ) : (
            <Headline3 className="no-entries-info">
              Brak elementów spełniające powyższe kryteria.
            </Headline3>
          )
        ) : (
          items
            .slice(0, itemsAmount)
            .map((i, idx) => <CaseStudy {...i} key={idx} />)
        )}
      </Container>
      {items.length > itemsAmount && filteredItems.length <= 0 && (
        <Button
          label="Więcej postów"
          onClick={() => setItemsAmount(itemsAmount + 3)}
        />
      )}
    </div>
  );
}
