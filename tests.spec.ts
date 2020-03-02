import { assert } from 'chai';
import { Drone } from './drone';
import { Room } from './room';

describe("drone tests", () => {
  const room = new Room();
  let drone = new Drone(0, 0, 0, "NORTH",room);

  it("should get current position and compare with right", async () => {
    assert.deepEqual(drone.reportPosition(), {
      axisX: 0,
      axisY: 0,
      axisZ: 0,
      face: 'NORTH',
    }, "position");
  });
  it("should get current position after move up", async () => {
    drone.move('UP');
    assert.deepEqual(drone.reportPosition(), {
      axisX: 0,
      axisY: 0,
      axisZ: 1,
      face: 'NORTH',
    }, "position");
  });
  it("should get current position after once move north", async () => {
    drone.move('MOVE');
    assert.deepEqual(drone.reportPosition(), {
      axisX: 0,
      axisY: 1,
      axisZ: 1,
      face: 'NORTH',
    }, "position");
  });
  it("should get current position after 6 move north", async () => {
    drone.move('MOVE');
    drone.move('MOVE');
    drone.move('MOVE');
    drone.move('MOVE');
    drone.move('MOVE');
    drone.move('MOVE');
    assert.deepEqual(drone.reportPosition(), {
      axisX: 0,
      axisY: 5,
      axisZ: 1,
      face: 'NORTH',
    }, "position");
  });
  it("should get current position after LEFT and 4 move", async () => {
    drone.changeDirection('LEFT');
    drone.move('MOVE');
    drone.move('MOVE');
    drone.move('MOVE');
    drone.move('MOVE');
    assert.deepEqual(drone.reportPosition(), {
      axisX: 0,
      axisY: 5,
      axisZ: 1,
      face: 'WEST',
    }, "position");
  });
  it("should get current position after RIGHT, MOVE,RIGHT and 6 move", async () => {
    drone.changeDirection('RIGHT');
    drone.move('MOVE');
    drone.changeDirection('RIGHT');
    drone.move('MOVE');
    drone.move('MOVE');
    drone.move('MOVE');
    drone.move('MOVE');
    drone.move('MOVE');
    drone.move('MOVE');
    assert.deepEqual(drone.reportPosition(), {
      axisX: 5,
      axisY: 5,
      axisZ: 1,
      face: 'EAST',
    }, "position");
  });
});
